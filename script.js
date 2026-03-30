document.addEventListener('DOMContentLoaded', () => {
    // フォーム要素の取得
    const form = document.getElementById('affiForm');
    const historyInput = document.getElementById('history');
    const successInput = document.getElementById('success');
    const otherInfoInput = document.getElementById('otherInfo');
    
    const resultsSection = document.getElementById('resultsSection');
    const postsContainer = document.getElementById('postsContainer');
    const resetBtn = document.getElementById('resetBtn');
    const template = document.getElementById('postTemplate');

    // ローカルストレージキー
    const STORAGE_KEY = 'rakuraku_affi_taro_data';

    // 1. ローカルストレージからデータを読み込む（2回目以降の自動補完）
    const loadFromStorage = () => {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                historyInput.value = parsed.history || '';
                successInput.value = parsed.success || '';
                otherInfoInput.value = parsed.otherInfo || '';
            } catch (e) {
                console.error("Storage parse error", e);
            }
        }
    };
    loadFromStorage();

    // 2. テンプレートの定義
    // 入力データ({history, success, otherInfo})を受け取り、テキストを返す関数の配列
    const generatePosts = (data) => {
        const p1 = `昔の私は、${data.history}\n毎日「このままでいいのかな」って不安だった。\n\nでも、勇気を出して一歩踏み出したら、\n${data.success}\n\n最初は難しそうって思ったけど、\nここには優しく教えてくれる環境があったよ✨\n\n「あの時、行動して本当によかった」って心から思える。\nもし今の生活を変えたいなら、一緒に学んでみない？\n\n【🎁私からの特典】\n${data.otherInfo}\n\n一緒に頑張る仲間が欲しい人は、プロフィールのリンクをチェックしてね！👇`;

        const p2 = `「自己投資って高そう…」\nって思うかもしれないけど、実はこれ【実質タダ】どころか【プラス】になるんです💡\n\n例えば、月に3人「一緒に学ぼう」って誘うだけで、\nあっという間に月額費用をカバーしてお釣りが出ちゃう計算に。💰\n\n私も最初は不安だったけど、\n${data.success}\n\n「お金を払って学ぶ」んじゃなくて「お釣りをもらいながら学ぶ」。\nこの感覚、もっと早く知りたかった！\n\n【✨私からのサポート】\n${data.otherInfo}\n\n気になったら、いつでも私のプロフを見てね！わからないことはDMで相談乗ります🌸`;

        const p3 = `よくDMで「未経験でも大丈夫ですか？」って聞かれるんだけど…\n\nもちろん大丈夫！🙆‍♀️\nだって、私も最初は${data.history}\n\nSNSなんて見る専だったし、文章書くのも苦手だった。\n\nでも特別なスキルや動画編集なんていらなくて、\nこうやってThreadsで思ったことをテキストで書くだけ。\n今の環境で「正しい稼ぎ方」を教わったら、\n${data.success}\n\n不安な気持ち、すごくわかるから、\n${data.otherInfo}\n\nまずは一歩踏み出してみましょう✨プロフリンクから詳細見てね👇`;

        const p4 = `今日もコツコツ作業中💻✨\n\n最近、アフィリエイトの勉強が楽しくて。\n「あ、ここってこうやればいいんだ！」っていう発見の連続。\n\nもちろん最初からうまくいったわけじゃなくて、\n${data.history}\n\nでも、諦めずに続けてたら、\n${data.success}\nこんな未来が待ってるなんて思わなかったな☺️\n\nThreadsだけじゃなくて、もっと深い話は公式LINEでお伝えしてます！\n${data.otherInfo}\n\n公式LINEのリンクはプロフィールにあるので、気軽に遊びに来てね🕊️`;

        const p5 = `「誰から買うか」って、本当に大事だと思う。\nだから私は、自分が本当に良いと思ったものしか紹介しません☺️\n\n私がこの環境をおすすめする理由は、単にノウハウがすごいからじゃなくて、\n${data.history}だった私でも、\n${data.success}という変化を感じられたから。\n\nもちろん、簡単にすぐ！ってわけじゃないけど、コツコツやれば必ず結果はついてくる。\n\n私から参加してくれた方には、\n「${data.otherInfo}」という形でお手伝いさせていただきます🤝\n\n一緒に人生変えたい人、プロフィールのリンクでお待ちしてます🌸`;

        return [
            {
                title: 'パターン1: Before&After（共感・変化アピール）',
                explanation: 'スライド4・8を応用。過去の悩みと現在の変化を対比させ、読者の感情を動かす基本スタイルです。',
                content: p1
            },
            {
                title: 'パターン2: 費用回収アピール（ロジカル・損したくない人向け）',
                explanation: 'スライド3・5を応用。「実質タダ」になるロジックを提示し、経済的な心理ハードルを下げます。',
                content: p2
            },
            {
                title: 'パターン3: Q&A・初心者安心（ハードル低下）',
                explanation: 'スライド7を応用。よくある質問に答える形で、未経験でもThreadsならテキストだけでできる手軽さを伝えます。',
                content: p3
            },
            {
                title: 'パターン4: プロセスエコノミー・日常（クローズド誘導）',
                explanation: 'スライド7・9を応用。いま頑張っている姿を見せつつ、LINE等のクローズドな関係へ誘導して成約率を高めます。',
                content: p4
            },
            {
                title: 'パターン5: 信頼・誠実さアピール（付加価値の提供）',
                explanation: 'スライド5・6を応用。「私から入る理由（特典）」を明確にし、無理な売り込み感を出さずに伴走感をアピールします。',
                content: p5
            }
        ];
    };

    // 3. フォーム送信処理
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 入力値の取得
        const data = {
            history: historyInput.value.trim(),
            success: successInput.value.trim(),
            otherInfo: otherInfoInput.value.trim()
        };

        // ローカルストレージへ保存
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        // 文章の生成
        const posts = generatePosts(data);

        // 表示のクリアと描画
        postsContainer.innerHTML = '';
        posts.forEach((post, index) => {
            const clone = template.content.cloneNode(true);
            const card = clone.querySelector('.post-card');
            
            // 少しずつフェードインさせるためのディレイ
            card.style.animationDelay = `${index * 0.15}s`;

            clone.querySelector('.post-title').textContent = post.title;
            clone.querySelector('.post-explanation').textContent = post.explanation;
            
            const textarea = clone.querySelector('.post-content-readonly');
            textarea.value = post.content;

            // コピーボタンの処理
            const copyBtn = clone.querySelector('.copy-btn');
            copyBtn.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(post.content);
                    const originalText = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> コピーしました！';
                    copyBtn.style.color = 'var(--primary-color)';
                    copyBtn.style.borderColor = 'var(--primary-color)';
                    setTimeout(() => {
                        copyBtn.innerHTML = originalText;
                        copyBtn.style.color = '';
                        copyBtn.style.borderColor = '';
                    }, 2000);
                } catch (err) {
                    alert('コピーに失敗しました。お手数ですが手動でコピーしてください。');
                }
            });

            // Threadsボタンの処理
            const threadsBtn = clone.querySelector('.threads-btn');
            threadsBtn.addEventListener('click', async () => {
                // UXのため、Threadsを開く前にクリップボードにもコピーしておく
                try {
                    await navigator.clipboard.writeText(post.content);
                } catch(e) { /* ignore */ }
                
                // ThreadsのインテントURL（テキストをURLエンコード）
                const encodedText = encodeURIComponent(post.content);
                const threadsUrl = `https://www.threads.net/intent/post?text=${encodedText}`;
                window.open(threadsUrl, '_blank');
            });

            postsContainer.appendChild(clone);
        });

        // UIの切り替え
        form.parentElement.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        resetBtn.classList.remove('hidden');
        
        // スムーズスクロール
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    });

    // 4. リセット（もう一度作成）処理
    resetBtn.addEventListener('click', () => {
        resultsSection.classList.add('hidden');
        resetBtn.classList.add('hidden');
        form.parentElement.classList.remove('hidden');
        
        // フォームの上部へスクロール
        form.parentElement.scrollIntoView({ behavior: 'smooth' });
    });
});
