import Image from 'next/image';

export default function AboutPage() {
  const infoTitleClass = 'text-[24px] text-center';
  const infoContentClass = 'rounded-lg bg-[#08120e66] py-6 px-4 grid gap-y-4';
  return (
    <div className="flex h-screen flex-col items-center px-4">
      {/* page title */}
      <div className="mb-4 flex flex-col items-center">
        <div className="Barlow_Condensed text-[64px]">About</div>
        <div className="mb-2 text-2xl">明前奶绿的基本信息</div>
        <Image
          src="/person-info.png"
          width={400}
          height={190}
          alt="person info"
          className=" rounded-lg"
        />
      </div>
      <div className="w-[400px]">
        <div className="section-info__container">
          <div className={infoTitleClass}>明前奶绿的情报</div>
          <div className={infoContentClass}>
            <p>
              你好热心人，我是明前奶绿。 是平日里在一家名叫 LAPLACE 的花店打工的
            </p>
            <p>19 岁少女，喜欢的花是百合。</p>
            <p>
              习惯躺在藤椅上眯着眼睛打盹，沐浴阳光，是向阳的花束一般的存在。
            </p>
            <p>拥有侧写与共感的能力，赋予花朵神奇的魔力，给人以温柔的治愈。</p>
            <p>闲暇之余偶尔会进行直播。</p>
            <p>
              店长是一只比我还懒的布偶猫眯，虽然是店长但其实傻还烂，特点是贼能吃（花店的营收全买吃的了）
            </p>
            <p>私底下大家都直呼他的大名：坚果。</p>
            <p>谢谢你来我的花店，希望你的生活总是充满鲜花和阳光的晴天~</p>
            <p className="text-white">——709069976572526628</p>
          </div>
        </div>
        <div className="section-info__container">
          <div className={infoTitleClass}>LAPLACE 花店的情报</div>
          <div className={infoContentClass}>
            <div className="grid gap-y-4">
              <p>
                在名为「LAPLACE」的鲜花店里，其实一直有一个不为人知的秘密，那些娇艳欲滴姿态万千的花朵其实都依赖于某种神秘的养料——那就是人类幽微而真挚的情感故事。
              </p>
              <p>
                然而随着某种未知力量的侵入，猜忌、中伤，嫉妒，虚伪不断蔓延。人们无论在网络上还是现实中都竭尽所能地隐藏自己的内心以保护自己。
              </p>
              <p>
                为了拯救濒临倒闭的花店，请将真挚而珍贵的情感故事借给奶绿小姐吧，它将作为璀璨丰盛的养分，补给到千百束鲜花中，共同赠与我们的世界。
              </p>
              <p>
                奶绿将在每周六的「鲜花与捕蝇草」栏目里和大家共同见证魔法的诞生。
              </p>
              <p className="text-white">——709438072461197417</p>
            </div>
            <div className="grid gap-y-4">
              <p>LAPLACE 花店开业不顺，人气惨淡，店长下了</p>
              <p>
                KPI要我今天就让好多客人来参观！！苦命店员急需路过的各位好心人献出你的一份爱！
              </p>
              <p>
                从今日九点起至今晚七点前，献唱歌单内并被选中的奶糖花将有机会和店员我，一起在直播间合唱~店长全程和观众们一起狠狠监督，你的表现还将会被直播录像保存！
              </p>
              <p>机不可失！失不再来！过了这村没这店！ 求求你们救救孩子吧（</p>
              <p className="text-white">——712991904490323970</p>
            </div>
            <div className="grid gap-y-4">
              <p>
                203X年，现实开始崩坏。想象之物侵入现实。拨云诡谲的迷雾似乎若隐若现的低语，凝视，使人发疯。隐约可见的文字隐藏着世间最晦涩难言的秘密……
              </p>
              <p>“今夜，拨开若隐若现的迷雾，以谜为引，你我自当大快朵颐。”</p>
              <p className="text-white">——781099133659250693</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
