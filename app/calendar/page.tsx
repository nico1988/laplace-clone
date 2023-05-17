export default function CalendarPage() {
  const mockSummaryInfo = {
    total: 156,
    history: '新账号开通直播间 —2022-05-15 直播',
    detailList: [
      {
        key: 'talk',
        total: 18,
      },
      {
        key: 'game',
        total: 14,
      },
      {
        key: 'watching',
        total: 18,
      },
      {
        key: 'submission',
        total: 2,
      },
      {
        key: 'music',
        total: 5,
      },
      {
        key: 'exercise',
        total: 23,
      },
      {
        key: 'radio',
        total: 6,
      },
      {
        key: 'collaborative',
        total: 14,
      },
      {
        key: 'special',
        total: 2,
      },
    ],
  };

  const categoryConfig = {
    talk: {
      title: '杂谈',
      color: '#FFC552',
    },
    game: {
      title: '游戏',
      color: '#47ebeb',
    },
    watching: {
      title: '观影',
      color: '#c67de8',
    },
    submission: {
      title: '投稿',
      color: '#EA8ABA',
    },
    music: {
      title: '歌回',
      color: '#3EE081',
    },
    exercise: {
      title: '健身',
      color: '#F05C77',
    },
    radio: {
      title: '电台',
      color: '#AFED5A',
    },
    collaborative: {
      title: '联动',
      color: '#FD9A49',
    },
    special: {
      title: '特殊',
      color: '#FFDD33',
    },
  };

  /* TODO
   *  mock每天的数据需要包含：日期，当日内容des，link（如果有），type： ’watching‘等分类
   *  以周为list
   */

  // TODO 字体使用全局样式 每个div最小宽度80px
  return (
    <div className="flex h-screen flex-col items-center px-4">
      {/* page title */}
      <div className="flex flex-col items-center">
        <div className="text-[64px]">Schedule</div>
        <div className="text-2xl">活动/直播日程</div>
      </div>
      <div className=" w-full">
        <div>
          {/* TODO 链接 */}
          共直播{mockSummaryInfo.total}场/iCal <a href="calendar">日历订阅</a>
        </div>
        <div>历史上的今天：{mockSummaryInfo.history}</div>
        <div>
          {mockSummaryInfo.detailList.map((item, index) => {
            const type = categoryConfig[item.key];
            const style = { color: type.color };
            return (
              <span style={style} key={item.key}>
                {/* <span className={`text-[${type.color}]`} key={item.key}> */}
                {type.title}
                {item.total}
                {index === mockSummaryInfo.detailList.length - 1 ? '' : '、'}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
