const examplesData = {
    beforeText: {
        money: [
            '100円のパンを買うのも毎回計算して迷っていた',
            '月末の支払いに追われ、スーパーで半額のものばかり探していた',
            '「お金がない」が口癖で、自分へのちょっとしたご褒美すら我慢していた',
            '貯金残高を見るたびにため息をつき、将来が不安でたまらなかった',
            '友人のランチの誘いも、お金を理由に断ってばかりで情けなかった'
        ],
        time: [
            '毎日仕事と家事の往復だけで、自分の時間なんて1秒もなかった',
            '「忙しい」が理由でいつもイライラしていて、子供にあたってしまうこともあった',
            '休日は疲れて寝るだけで、趣味を楽しむ余裕なんて一切なかった',
            '時間がなくて美容室にも行けず、鏡に映る疲れた自分を見るのが嫌だった',
            '毎日時間に追われて夜は気絶するように眠る、ただそれだけの繰り返しだった'
        ],
        family: [
            '夫の収入に頼るしかなく、「どうせ私は何も意見できない」と我慢ばかりしていた',
            '専業主婦であることに引け目を感じ、自分の欲しいものも相談できなかった',
            '「お母さん」という役割だけで生きている感覚で、自分の人生を楽しめていなかった',
            '家事や育児を頑張っても誰からも褒められず、孤独を感じていた',
            '自分より常に家族を優先し、自分の夢や目標なんて完全に諦めていた'
        ],
        self: [
            '特別なスキルや資格もなく、「私には何の取り柄もない」と自信を持てなかった',
            'SNSでキラキラしている同年代を見て、いつも自分と比べて落ち込んでいた',
            '今の職場でしか生きていけないと思い込み、新しい挑戦を最初から諦めていた',
            '過去の失敗を引きずり、「どうせ私には無理」と心のどこかで諦めていた',
            '何をしても中途半端で、自分自身を好きになれない日々が続いていた'
        ],
        future: [
            '貯えも増えず、今の仕事をいつまで続けられるか分からず不安でいっぱいだった',
            '子供の将来の教育費を考えると、どうしたらいいか分からず焦りだけがあった',
            '何となく生きている現状に「このままで本当にいいのかな」と常にモヤモヤしていた',
            '老後の資金なんて全くメドが立たず、見えない未来に怯えていた',
            '周りがどんどんステップアップしていく中、自分だけが取り残されている気がした'
        ]
    },
    triggerText: {
        money: [
            'ここで「正しいお金の稼ぎ方」を知って、とにかくやってみようと決心した',
            '「今のままじゃ一生変わらない」と危機感を感じ、自己投資を決めた',
            '無理なくできる方法があると知り、スマホ一つで新しいことを始めた',
            '「お金が理由で我慢する人生を変えたい！」と強く思い、本気で副業を始めた',
            '知識ゼロでも結果を出している人たちの姿を見て、挑戦する勇気をもらった'
        ],
        time: [
            'スキマ時間でもできると知って、通勤電車の中で学ぶことから始めた',
            '1日30分なら私にも作れると思い、夜寝る前の時間を使うことにした',
            '時間の使い方を見直し、無駄な時間を減らして本気で学ぶ覚悟を決めた',
            '忙しいママでも結果を出している環境を知り、自分もやってみようと飛び込んだ',
            '「時間がない」を言い訳にするのをやめ、できることからコツコツ始めた'
        ],
        family: [
            '自分の力で稼ぎたいと強く思い、この環境に飛び込んで一から学ぶことにした',
            '「家族をもっと笑顔にしたい」という気持ちから、こっそり副業をスタートした',
            '経済的に自立して対等になりたいと思い、実績のある人から学ぶことに決めた',
            '子供に「お金がない」と言わなくて済むようにしたいと、決意を固めた',
            '自分も輝く親になりたいと思い、育児の合間に本気で学び始めた'
        ],
        self: [
            '「テキスト一つで発信できる」と聞き、これなら私にもできるかもしれないと一歩踏み出した',
            '初心者でも結果が出ている人が多いと知り、思い切って飛び込んでみた',
            '「やらない後悔よりやる後悔」と自分に言い聞かせて、新しい挑戦を始めた',
            '何かに夢中になっている人たちが眩しく見え、私もその環境に飛び込んでみた',
            '自分を変えるラストチャンスだと思い、思い切って最初のステップを踏み出した'
        ],
        future: [
            '「自力で稼ぐ力をつけるしかない」と焦りを感じ、本気で学ぶ決意をした',
            '将来のためのスキルを今から身につけようと、基礎から学べる環境を選んだ',
            '先行きが見えない不安を消すために、確実なノウハウを学ぶことにした',
            '「このまま何もしなければ後悔する」と思い、一生物のスキルを学び始めた',
            '安定した未来を手に入れるため、いま行動を起こすしかないと決心した'
        ]
    },
    afterText: {
        money: [
            '今では値段を見ずに、子供が欲しがる絵本を笑顔で買ってあげられるようになった！',
            '月に数万円の余裕が生まれ、週末は家族で外食を楽しめるようになった！',
            'お金に対する不安がなくなり、将来のための貯金もしっかりできるようになった！',
            '「お金がない」が口癖だった私が、旅行の計画を立ててワクワクしている！',
            '自分へのご褒美も迷わず買えるようになり、心に大きな余裕が生まれた！'
        ],
        time: [
            '自分のペースで作業できるから、心にゆとりを持って子供と向き合えるようになった！',
            '通勤のストレスから解放され、家でコーヒーを飲みながら楽しく仕事をしている！',
            '時間とお金の両方を手に入れ、平日の昼間からふらっとカフェに行けるようになった！',
            'やらなきゃいけないことではなく、やりたいことに時間を使えるようになった！',
            '自分のための時間をしっかり確保できるようになり、毎日イキイキしている！'
        ],
        family: [
            '夫に頼らず自分でお金を生み出せるようになり、家族旅行の行き先も自分で提案できるようになった！',
            '自信がついたおかげで、夫婦の会話も増えて家庭の雰囲気が劇的に良くなった！',
            '「ママすごいね！」と子供から言われるようになり、誇りを持って働けている！',
            '自分の意見をしっかり言えるようになり、夫とも対等な関係を築けるようになった！',
            '家族のために我慢するのではなく、家族全員が笑顔で過ごせる毎日を手に入れた！'
        ],
        self: [
            '自分の発信に「共感しました」と言ってくれる人が増え、毎日が劇的に楽しくなった！',
            '「私にもできるんだ」という自信がつき、いろんなことに挑戦したくてワクワクしている！',
            '同じ目標を持つ仲間と出会え、一緒に成長を喜び合える最高の環境を手に入れた！',
            '自分の取り柄に気づくことができ、心から自分自身を好きになれた！',
            'ただの主婦から「発信する側」になり、毎日が充実感でいっぱいになっている！'
        ],
        future: [
            '正しい努力の方向性が明確になり、将来への不安が消えて心から毎日を楽しめるようになった！',
            '自力で稼げるスキルという「一生モノの武器」を手に入れ、将来が楽しみに変わった！',
            '今の頑張りが未来に繋がっていると実感でき、毎日充実感でいっぱいになっている！',
            'もう未来に怯えることはない。確かなスキルと自信を手に入れ前向きに進んでいる！',
            '自分次第で人生はいくらでも変えられると分かり、将来が楽しみで仕方ない！'
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

        let p1 = `昔の私は、「${beforeText}」——ずっとそんな風に悩んでいました。\nでも、「このままじゃ絶対にダメだ」と思っていたタイミングで${triggerText}。\n\n最初は自分にできるか不安もあったけど、教わった通りに素直に行動してみたら、大きく変わることができたんです。\n\n${afterText}\n\n「あの時、勇気を出して本当によかった」って心から思えます。\nもし今の生活を少しでも変えたいなら、私と一緒に【${product}】で学んでみませんか？\n\n【🎁私からの特典】\n${otherInfo}\n\n一緒に頑張る仲間が欲しい人は、プロフィールのリンクをチェックしてね！👇`;

        let p2 = `「自己投資ってお金がかかりそう…」って思うかもしれないけど、実はこれ【実質タダ】どころか【プラス】になるんです💡\n\n例えば【${product}】で学んで、月に3人「一緒に学ぼう」って誘うだけで、あっという間に月額費用をカバーしてお釣りが出ちゃう計算に。💰\n\n私も最初はすごく不安でした。でも思い切って挑戦したら、${afterText}\n\n「お金を失う」んじゃなくて「お釣りをもらいながらスキルを学ぶ」。この感覚、もっと早く知りたかった！\n\n【✨私からのサポート】\n${otherInfo}\n\n気になったら、いつでも私のプロフを見てね！わからないことはDMで相談乗ります🌸`;

        let p3 = `よくDMで「未経験の初心者でも大丈夫ですか？」って聞かれるんだけど…もちろん大丈夫です！🙆‍♀️\n\nだって、私も元々は「${beforeText}」という状況だったから。\n\nSNSなんて見る専だったし、気の利いた文章を書くのも苦手。でも特別なスキルや動画編集なんていらなくて、こうやってThreadsで素直な気持ちをテキストで書くだけ。\n\n【${product}】で「正しい稼ぎ方」を教わったら、${afterText}\n\n不安な気持ち、すごくよくわかるから、\n${otherInfo}\nまずは一歩踏み出してみましょう✨プロフリンクから詳細見てね👇`;

        let p4 = `今日もコツコツ作業中💻✨\n\n最近は【${product}】でアフィリエイトの勉強をするのが楽しくて。「あ、ここってこうやればいいんだ！」っていう発見の連続です。\n\nもちろん最初から自信があったわけじゃありません。以前の私は、${beforeText}。\n\nでも、${triggerText}。\n諦めずにコツコツ進んでたら、${afterText}\n\nこんな未来が待っているなんて想像もしてなかったな☺️\n\nThreadsだけじゃなくて、もっと深い話は公式LINEでお伝えしてます！\n${otherInfo}\n公式LINEのリンクはプロフィールにあるので、気軽に遊びに来てね🕊️`;

        let p5 = `「誰から買うか」って、本当に大事なことだと思います。\nだから私は、自分が心から良いと思えたものしか紹介しません☺️\n\n私が【${product}】をおすすめする一番の理由は、ノウハウがすごいからだけじゃありません。\n「${beforeText}」と悩んでいた私でも、大きく変われたからです。\n\n実際に今では、${afterText}\n\nもちろん「何もしないで一瞬で！」というような魔法じゃありません。でも、正しい方向でコツコツやれば必ず結果はついてきます。\n\n私から参加してくれた方には、\n「${otherInfo}」\nという形でお手伝いさせていただきます🤝\n\n一緒に人生を変えたい方、プロフィールのリンクでお待ちしてます🌸`;

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
