document.addEventListener('DOMContentLoaded', () => {
    // フォーム要素の取得
    const form = document.getElementById('affiForm');
    const historyInput = document.getElementById('history');
    const successInput = document.getElementById('success');
    const otherInfoInput = document.getElementById('otherInfo');
    const productInput = document.getElementById('product');
    const pastPostsInput = document.getElementById('pastPosts');
    
    const resultsSection = document.getElementById('resultsSection');
    const aiPromptOutput = document.getElementById('aiPromptOutput');
    const copyPromptBtn = document.getElementById('copyPromptBtn');
    const resetBtn = document.getElementById('resetBtn');

    // ローカルストレージキー
    const STORAGE_KEY = 'rakuraku_affi_taro_data_v2';

    // 1. ローカルストレージからデータを読み込む
    const loadFromStorage = () => {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                historyInput.value = parsed.history || '';
                successInput.value = parsed.success || '';
                otherInfoInput.value = parsed.otherInfo || '';
                productInput.value = parsed.product || '';
                pastPostsInput.value = parsed.pastPosts || '';
            } catch (e) {
                console.error("Storage parse error", e);
            }
        }
    };
    loadFromStorage();

    // 2. プロンプト生成関数
    const generateAIPrompt = (data) => {
        return `あなたはプロのSNSマーケターであり、私のThreads投稿のゴーストライターです。
以下の【条件とルール】に従って、アフィリエイト用のThreads投稿文を【5パターン】作成してください。
何よりも重要なのは、【私の過去の投稿の口調・文章の癖】を完全に模倣することです。AIっぽい不自然な表現は避けてください。

---
■ 私の基本情報
・紹介したい商品/サービス: ${data.product}
・私の過去の経歴/悩み: ${data.history}
・得られた成功体験/変化: ${data.success}
・その他のサポート情報/特典: ${data.otherInfo}

---
■ 私の過去の投稿の口調（この文体を完全に真似してください）
${data.pastPosts}

---
■ 出力文字数
各パターンにつき、140文字〜300文字程度（Threadsに最適な短文・改行多めの構成）

---
■ 作成する5つのパターンのテーマ（以下のノウハウに基づく）

【パターン1: Before&After（共感・変化アピール）】
過去の悩み（100円のパン購入を迷う等）から、正しい学びによる現在の変化（子供に笑顔で絵本が買える等）を語る。機能ではなく「どう変われるか」を伝える。

【パターン2: 費用回収アピール（ロジカル・損したくない人向け）】
「自己投資は実質タダになる」という魔法のシミュレーション。数人紹介するだけで月額をカバーし、お釣りをもらいながら学ぶ状態になれることを伝える。

【パターン3: Q&A・初心者安心（ハードル低下）】
「SNS初心者でも大丈夫？」という質問に答える形式。おしゃれな写真や動画編集は不要で、テキスト入力だけで勝負できる手軽さ・低ハードルを伝える。

【パターン4: プロセスエコノミー・日常（クローズド誘導）】
「今、これを学んでいます」「ここが難しくて苦戦中」など現在進行形で投稿を体験談にし、売込み感をゼロにする。最後はLINE等のクローズドな場に誘導する。

【パターン5: 信頼・付加価値の提供】
「私から買う理由」を作る。私が本当に良いと思っている理由と、私経由で入った場合の特典（初期設定サポートや独自ガイド等）を伴走感をもって伝える。

以上5つのルールに沿って、絵文字の使い方も私の過去の投稿に合わせて、5つの文章を出力してください。`;
    };

    // 3. フォーム送信処理
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 入力値の取得
        const data = {
            history: historyInput.value.trim(),
            success: successInput.value.trim(),
            otherInfo: otherInfoInput.value.trim(),
            product: productInput.value.trim(),
            pastPosts: pastPostsInput.value.trim()
        };

        // ローカルストレージへ保存
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        // プロンプトの生成
        const promptText = generateAIPrompt(data);

        // 表示のクリアと描画
        aiPromptOutput.value = promptText;

        // UIの切り替え
        form.parentElement.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        resetBtn.classList.remove('hidden');
        
        // スムーズスクロール
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    });

    // 4. コピーボタン処理
    copyPromptBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(aiPromptOutput.value);
            const originalText = copyPromptBtn.innerHTML;
            copyPromptBtn.innerHTML = '<i class="fa-solid fa-check"></i> コピー完了！';
            copyPromptBtn.style.color = 'var(--primary-color)';
            copyPromptBtn.style.borderColor = 'var(--primary-color)';
            setTimeout(() => {
                copyPromptBtn.innerHTML = originalText;
                copyPromptBtn.style.color = '';
                copyPromptBtn.style.borderColor = '';
            }, 2000);
        } catch (err) {
            alert('コピーに失敗しました。お手数ですが手動でコピーしてください。');
        }
    });

    // 5. リセット（もう一度作成）処理
    resetBtn.addEventListener('click', () => {
        resultsSection.classList.add('hidden');
        resetBtn.classList.add('hidden');
        form.parentElement.classList.remove('hidden');
        
        // フォームの上部へスクロール
        form.parentElement.scrollIntoView({ behavior: 'smooth' });
    });
});
