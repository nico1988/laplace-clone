import getCalendarList from './mock.js';

async function getData() {
  const data = getCalendarList(5);
  return data;
}

export default async function CalendarPage() {
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
    break: {
      title: '休息',
      color: '#B0BAAB',
    },
  };
  const eventWidth = '180px';

  const data = await getData();

  // TODO 字体使用全局样式 每个div最小宽度80px
  return (
    <div className="flex h-screen flex-col items-center px-4">
      {/* page title */}
      <div className="flex flex-col items-center">
        <div className="text-[64px]">Schedule</div>
        <div className="text-2xl">活动/直播日程</div>
      </div>

      {/* page info */}
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

      {/* calendar */}
      <div>
        {data.map((item, index) => (
          <div key={item.date} className="flex w-full gap-[8px]">
            <div>{item.date}</div>
            {item.activities.map((activity) => {
              const type = categoryConfig[activity.type];
              const style = { color: type.color };
              return (
                <div
                  className={`event__wrapper min-w-[${eventWidth}]`}
                  key={activity.type}
                  style={style}
                >
                  <div className="event__title">
                    <div>{item.date}</div>
                    <div>{type.title}</div>
                  </div>
                  <div className="event__content">{activity.content}</div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
