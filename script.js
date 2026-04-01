const examplesData = {
    beforeText: {
        money: [
            '100円のパンを買うのも毎回計算して迷っていた',
            '月末の支払いに追われ、スーパーで半額のものばかり探していた',
            '「お金がない」が口癖で、自分へのちょっとしたご褒美すら我慢していた'
        ],
        time: [
            '毎日仕事と家事の往復だけで、自分の時間なんて1秒もなかった',
            '「忙しい」が理由でいつもイライラしていて、子供にあたってしまうこともあった',
            '休日は疲れて寝るだけで、趣味を楽しむ余裕なんて一切なかった'
        ],
        family: [
            '夫の収入に頼るしかなく、「どうせ私は何も意見できない」と我慢ばかりしていた',
            '専業主婦であることに引け目を感じ、自分の欲しいものも相談できなかった',
            '「お母さん」という役割だけで生きている感覚で、自分の人生を楽しめていなかった'
        ],
        self: [
            '特別なスキルや資格もなく、「私には何の取り柄もない」と自信を持てなかった',
            'SNSでキラキラしている同年代を見て、いつも自分と比べて落ち込んでいた',
            '今の職場でしか生きていけないと思い込み、新しい挑戦を最初から諦めていた'
        ],
        future: [
            '貯えも増えず、今の仕事をいつまで続けられるか分からず不安でいっぱいだった',
            '子供の将来の教育費を考えると、どうしたらいいか分からず焦りだけがあった',
            '何となく生きている現状に「このままで本当にいいのかな」と常にモヤモヤしていた'
        ]
    },
    triggerText: {
        money: [
            'ここで「正しいお金の稼ぎ方」を知って、とにかくやってみようと決心した',
            '「今のままじゃ一生変わらない」と危機感を感じ、自己投資を決めた',
            '無理なくできる方法があると知り、スマホ一つで新しいことを始めた'
        ],
        time: [
            'スキマ時間でもできると知って、通勤電車の中で学ぶことから始めた',
            '1日30分なら私にも作れると思い、夜寝る前の時間を使うことにした',
            '時間の使い方を見直し、無駄な時間を減らして本気で学ぶ覚悟を決めた'
        ],
        family: [
            '自分の力で稼ぎたいと強く思い、この環境に飛び込んで一から学ぶことにした',
            '「家族をもっと笑顔にしたい」という気持ちから、こっそり副業をスタートした',
            '経済的に自立して対等になりたいと思い、実績のある人から学ぶことに決めた'
        ],
        self: [
            '「テキスト一つで発信できる」と聞き、これなら私にもできるかもしれないと一歩踏み出した',
            '初心者でも結果が出ている人が多いと知り、思い切って飛び込んでみた',
            '「やらない後悔よりやる後悔」と自分に言い聞かせて、新しい挑戦を始めた'
        ],
        future: [
            '「自力で稼ぐ力をつけるしかない」と焦りを感じ、本気で学ぶ決意をした',
            '将来のためのスキルを今から身につけようと、基礎から学べる環境を選んだ',
            '先行きが見えない不安を消すために、確実なノウハウを学ぶことにした'
        ]
    },
    afterText: {
        money: [
            '今では値段を見ずに、子供が欲しがる絵本を笑顔で買ってあげられるようになった！',
            '月に数万円の余裕が生まれ、週末は家族で外食を楽しめるようになった！',
            'お金に対する不安がなくなり、将来のための貯金もしっかりできるようになった！'
        ],
        time: [
            '自分のペースで作業できるから、心にゆとりを持って子供と向き合えるようになった！',
            '通勤のストレスから解放され、家でコーヒーを飲みながら楽しく仕事をしている！',
            '時間とお金の両方を手に入れ、平日の昼間からふらっとカフェに行けるようになった！'
        ],
        family: [
            '夫に頼らず自分でお金を生み出せるようになり、家族旅行の行き先も自分で提案できるようになった！',
            '自信がついたおかげで、夫婦の会話も増えて家庭の雰囲気が劇的に良くなった！',
            '「ママすごいね！」と子供から言われるようになり、誇りを持って働けている！'
        ],
        self: [
            '自分の発信に「共感しました」と言ってくれる人が増え、毎日が劇的に楽しくなった！',
            '「私にもできるんだ」という自信がつき、いろんなことに挑戦したくてワクワクしている！',
            '同じ目標を持つ仲間と出会え、一緒に成長を喜び合える最高の環境を手に入れた！'
        ],
        future: [
            '正しい努力の方向性が明確になり、将来への不安が消えて心から毎日を楽しめるようになった！',
            '自力で稼げるスキルという「一生モノの武器」を手に入れ、将来が楽しみに変わった！',
            '今の頑張りが未来に繋がっていると実感でき、毎日充実感でいっぱいになっている！'
        ]
    }
};

const clickCounts = {};

// 例文を挿入するヘルパー関数
function insertExample(elementId, category) {
    const key = `${elementId}_${category}`;
    if (!clickCounts[key]) clickCounts[key] = 0;
    
    const arr = examplesData[elementId][category];
    const text = arr[clickCounts[key] % arr.length];
    clickCounts[key]++;
    
    const el = document.getElementById(elementId);
    if(el) {
        el.value = text;
        el.focus();
    }
}

// 文末の「！。」「？。」などを「！」「？」に修正する関数
const cleanupPunctuation = (text) => {
    return text.replace(/([！？!?])[。、]/g, '$1');
};

document.addEventListener('DOMContentLoaded', () => {
    // フォーム要素の取得
    const form = document.getElementById('affiForm');
    const productInput = document.getElementById('product');
    const affiliateLinkInput = document.getElementById('affiliateLink');
    const otherInfoInput = document.getElementById('otherInfo');
    const beforeTextInput = document.getElementById('beforeText');
    const triggerTextInput = document.getElementById('triggerText');
    const afterTextInput = document.getElementById('afterText');
    
    const resultsSection = document.getElementById('resultsSection');
    const postsContainer = document.getElementById('postsContainer');
    const resetBtn = document.getElementById('resetBtn');
    const template = document.getElementById('postTemplate');

    // プロフィール表示用
    const loginMessage = document.getElementById('loginMessage');
    const clearProfileBtn = document.getElementById('clearProfileBtn');

    // ローカルストレージキー
    const STORAGE_KEY = 'rakuraku_affi_taro_v3_profile';

    // 1. プロフィールの読み込み（疑似ログイン）
    const loadProfile = () => {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                productInput.value = parsed.product || '';
                affiliateLinkInput.value = parsed.affiliateLink || '';
                otherInfoInput.value = parsed.otherInfo || '';
                beforeTextInput.value = parsed.beforeText || '';
                triggerTextInput.value = parsed.triggerText || '';
                afterTextInput.value = parsed.afterText || '';
                
                // ログイン状態風の表示
                loginMessage.innerHTML = 'ようこそ！前回の情報が引き継がれました✨';
                loginMessage.style.color = 'var(--accent-color)';
                clearProfileBtn.classList.remove('hidden');
            } catch (e) {
                console.error("Storage parse error", e);
            }
        }
    };
    loadProfile();

    // データのクリア処理
    clearProfileBtn.addEventListener('click', () => {
        if(confirm('保存されている入力内容をすべてリセットしますか？')) {
            localStorage.removeItem(STORAGE_KEY);
            form.reset();
            loginMessage.innerHTML = '情報が入力されていません';
            loginMessage.style.color = '';
            clearProfileBtn.classList.add('hidden');
        }
    });

    // 2. テンプレートの定義
    const generatePosts = (data) => {
        const { product, affiliateLink, otherInfo, beforeText, triggerText, afterText } = data;

        let p1 = `昔の私は、${beforeText}ってずっと悩んでた。でも、「このままじゃダメだ」と思って${triggerText}。\n\n最初は難しそうって思ったけど、教えてもらった通りにやってみたら、${afterText}。\n\n「あの時、行動して本当によかった」って心から思える。\nもし今の生活を変えたいなら、一緒に【${product}】を学んでみない？\n\n【🎁私からの特典】\n${otherInfo}\n\n一緒に頑張る仲間が欲しい人は、プロフィールのリンクをチェックしてね！👇`;

        let p2 = `「自己投資って高そう…」って思うかもしれないけど、実はこれ【実質タダ】どころか【プラス】になるんです💡\n\n例えば【${product}】で学んで、月に3人「一緒に学ぼう」って誘うだけで、あっという間に月額費用をカバーしてお釣りが出ちゃう計算に。💰\n\n私も最初は不安だったけど、${afterText}。\n「お金を払って学ぶ」んじゃなくて「お釣りをもらいながら学ぶ」。この感覚、もっと早く知りたかった！\n\n【✨私からのサポート】\n${otherInfo}\n\n気になったら、いつでも私のプロフを見てね！わからないことはDMで相談乗ります🌸`;

        let p3 = `よくDMで「未経験でも大丈夫ですか？」って聞かれるんだけど…もちろん大丈夫！🙆‍♀️\n\nだって、私も最初は${beforeText}って状況だったから。\n\nSNSなんて見る専だったし、文章書くのも苦手だった。でも特別なスキルや動画編集なんていらなくて、こうやってThreadsで思ったことをテキストで書くだけ。\n【${product}】で「正しい稼ぎ方」を教わったら、${afterText}。\n\n不安な気持ち、すごくわかるから、\n${otherInfo}\nまずは一歩踏み出してみましょう✨プロフリンクから詳細見てね👇`;

        let p4 = `今日もコツコツ作業中💻✨\n\n最近【${product}】でアフィリエイトの勉強をするのが楽しくて。「あ、ここってこうやればいいんだ！」っていう発見の連続。\n\nもちろん最初からうまくいったわけじゃなくて、${beforeText}。\n\nでも、諦めずに${triggerText}って進んでたら、${afterText}。\nこんな未来が待ってるなんて思わなかったな☺️\n\nThreadsだけじゃなくて、もっと深い話は公式LINEでお伝えしてます！\n${otherInfo}\n公式LINEのリンクはプロフィールにあるので、気軽に遊びに来てね🕊️`;

        let p5 = `「誰から買うか」って、本当に大事だと思う。\nだから私は、自分が本当に良いと思ったものしか紹介しません☺️\n\n私が【${product}】をおすすめする理由は、単にノウハウがすごいからじゃなくて、${beforeText}だった私でも、${afterText}という変化を感じられたから。\n\nもちろん、簡単にすぐ！ってわけじゃないけど、コツコツやれば必ず結果はついてくる。\n\n私から参加してくれた方には、\n「${otherInfo}」\nという形でお手伝いさせていただきます🤝\n\n一緒に人生変えたい人、プロフィールのリンクでお待ちしてます🌸`;

        let postsData = [
            { title: 'パターン1: Before&After（感動ストーリー型）', explanation: '過去の悩みと現在の変化を綺麗に対比させ、読者の感情を動かす基本スタイルです。', content: cleanupPunctuation(p1) },
            { title: 'パターン2: 費用回収アピール（ロジカル・損したくない人向け）', explanation: '「実質タダ」になるロジックを提示し、自己投資への精神的なハードルを下げます。', content: cleanupPunctuation(p2) },
            { title: 'パターン3: Q&A・初心者安心（ハードル低下）', explanation: 'よくある質問に答える形で、未経験でもThreadsなら簡単にできる手軽さを伝えます。', content: cleanupPunctuation(p3) },
            { title: 'パターン4: プロセスエコノミー・日常（クローズド誘導）', explanation: 'いま頑張っている姿を見せつつ、クローズドな関係へ誘導して成約率を高めます。', content: cleanupPunctuation(p4) },
            { title: 'パターン5: 信頼・誠実さアピール（付加価値の提供）', explanation: '売り込み感を消し、「私から入る理由（特典）」を明確にして伴走感をアピールします。', content: cleanupPunctuation(p5) }
        ];

        // アフィリエイトリンクがあれば追記する
        if (affiliateLink) {
            postsData = postsData.map(post => {
                post.content += `\n\n🔗 ${affiliateLink}`;
                return post;
            });
        }

        return postsData;
    };

    // 3. フォーム送信処理
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 入力値の取得
        const data = {
            product: productInput.value.trim(),
            affiliateLink: affiliateLinkInput.value.trim(),
            otherInfo: otherInfoInput.value.trim(),
            beforeText: beforeTextInput.value.trim(),
            triggerText: triggerTextInput.value.trim(),
            afterText: afterTextInput.value.trim(),
        };

        // ローカルストレージへ保存（ログイン風に記録）
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        
        // 保存したのでメッセージを更新
        loginMessage.innerHTML = '入力データが保存されました！✨';
        loginMessage.style.color = 'var(--accent-color)';
        clearProfileBtn.classList.remove('hidden');

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
            // 行数に合わせて自動リサイズに近いことをするがCSSで高さ固定でもOK
            textarea.value = post.content;

            // コピーボタンの処理
            const copyBtn = clone.querySelector('.copy-btn');
            copyBtn.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(post.content);
                    const originalText = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> コピー完了';
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
                try {
                    await navigator.clipboard.writeText(post.content);
                } catch(e) { /* ignore */ }
                
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
