import { CSSProperties } from 'react';
import getCalendarList from './mock.js';

async function getData() {
  const data = getCalendarList(17);
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
  const contentWrapperStyle: CSSProperties = {
    backgroundColor: 'rgba(8, 18, 14, 0.4)',
  };

  const data = await getData();

  // TODO 字体使用全局样式 每个div最小宽度80px
  return (
    <div className="flex h-screen flex-col items-center px-4">
      {/* page title */}
      <div className="mb-4 flex flex-col items-center">
        <div className="Barlow_Condensed text-[64px]">Schedule</div>
        <div className="text-2xl">活动/直播日程</div>
      </div>

      <div
        className="content__wrapper rounded-lg py-6 px-4"
        style={contentWrapperStyle}
      >
        {/* page info */}
        <div className="grid w-full gap-y-2">
          <div>
            {/* TODO 链接 */}
            共直播<span className="text-white">{mockSummaryInfo.total}</span>
            场/iCal <a href="calendar">日历订阅</a>
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
        <div className="calendar__wrapper mt-4 grid gap-y-3">
          {data.map((item, index) => (
            <div key={item.date} className="grid w-full gap-y-1">
              <div>{item.date}</div>
              <div className="flex gap-x-1">
                {item.activities.map((activity) => {
                  const type = categoryConfig[activity.type];
                  const hexToRgb = (hex) => {
                    const rgb = [];
                    for (let i = 1; i < 7; i += 2) {
                      rgb.push(parseInt(`0x${hex.slice(i, i + 2)}`, 16));
                    }
                    return rgb.join(',');
                  };
                  const eventWrapperStyle: CSSProperties = {
                    position: 'relative',
                    color: type.color,
                    minWidth: eventWidth,
                    maxWidth: eventWidth,
                    background: `rgba(${hexToRgb(type.color)},0.1)`,
                  };
                  const typeStyle: CSSProperties = {
                    position: 'absolute',
                    right: '0',
                    top: '0',
                  };
                  return (
                    <div
                      className="event__wrapper rounded"
                      key={activity.date}
                      style={{ ...eventWrapperStyle }}
                    >
                      <div className="event__title">
                        <div>{activity.time}</div>
                        <div style={typeStyle}>{type.title}</div>
                      </div>
                      <div className="event__content">{activity.content}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
