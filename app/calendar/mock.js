/* eslint-disable no-plusplus */
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

const days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

function getRandomCategory() {
  const categories = Object.keys(categoryConfig);
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}

function getRandomTime() {
  const hour = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 60);
  return `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }`;
}

function getRandomContent() {
  const contents = [
    '塞尔达哒哒哒',
    '陪你度过漫长季节',
    '今天女儿要长大',
    '梦境之花',
    '为什么追我',
    '晚间电台',
    '安静观赏视频回',
    '想玩古剑三了',
    '来人，上海龟汤',
    '我女儿长大了',
    '女儿不要被拱了！',
    '人类观察记录',
    '外出',
    '早班电台',
    '年轻十岁的里昂酱',
    '粉丝海龟汤不得不品（已取消）',
    '和大家一起看看',
    '养女儿不易',
    '暴雨！',
    '梦境之花',
    '假日老歌～',
    '这不是艾什莉吗',
    '还是看看里昂吧',
    '看片？怀旧！',
    '好久不见的健身环',
    '棉花糖好吃！',
    '生化危机',
    '夜间电台',
    'GAME TIME',
    '蜻蜓队长前来觐见',
    '梦境之花',
    '二创可以，逆天不行',
    '开船',
    '看看小视频',
    '温馨电台（已取消）',
    '梦境之花',
    'GAME TIME',
    '我肥来了！（杂谈）',
    'GAME TIME',
    '别死好吗',
    '梦境之花',
    '一起看电影',
    '可能有突击电台',
    '𝑮𝒂𝒎𝒆 𝑻𝒊𝒎𝒆',
    '梦境之花',
    '上吧 𝒔𝒆𝒌𝒊𝒓𝒐',
    '梦境之花',
    '学习——白色情人节',
    '养家糊口😭day*n',
    '打牌试试',
    '梦境之花',
    '晚间电台',
    '感恩奶糖中心 续',
    '𝑮𝒂𝒎𝒆 𝑻𝒊𝒎𝒆',
    '试试森之子林',
    '梦境之花（已取消）',
    '糖豆人技术退化测试',
    '没念到的不要丢 箱底捞捞奶糖花',
    '𝑮𝒂𝒎𝒆 𝑻𝒊𝒎𝒆',
    '睡前分享电台',
    '一个大日子',
    '感恩中心 优秀奶糖花表彰大会',
    '潜水员奶绿',
    '艾迪芬奇的记忆',
    '观影惊魂',
    '梦境之花',
    '和大家一起唱歌',
    '围观小情侣',
    '魔法少女',
    '潜水员奶桑',
    '试试棉花糖',
    '健来',
    '播播',
    '游戏',
    '游戏',
    '新春歌会贰',
    '元宵节电台',
    '奶绿新春歌会',
    '来点B友爱看',
    '新春糖豆人',
    '奶绿潜水员',
    '新春梦境之花',
    '来点海绵宝宝',
    '复健打游戏',
    '看看你的过年小视频',
    '除夕晚间电台',
    '春节舞力全开',
    '复健打游戏',
    '整蛊你和我',
    '复健打老游戏',
    '梦境之花',
    '看二创',
    '早早早',
    '咳咳咳快好了day1',
    '来了来了！！周五好！',
    '试试阿阿阿尔宙斯！',
    '哈！',
    '就播一会！！',
    '428',
    '阿阿宙斯',
    '突突突突突',
    '平安夜要平安',
    '二创（已取消）',
    '看看三体',
    '有鬼大侠饶命（已取消）',
    '试试以前的宝',
    '生命在于跳舞🕺',
    '电台',
    '来宝宝！',
    '画伯的艺术创想',
    '梦境之花！',
    '宝可梦闪光作战',
    '欧雷瓦刚大木哒',
    '大家一起唱歌',
    '世界游戏大全',
    '唐逗人',
    '宝可梦奶绿',
    '花店休憩时光',
    '打工破案后续',
    '夜晚的花说梦话',
    '一起唱歌',
    '涉谷大作战',
    '使徒来袭',
    '大作战白热化',
    '梦境哔哔哔',
    '童年小游戏',
    '哈！活！',
    '游戏',
    '主题杂谈',
    '🌟联动🌟',
    '看看二创',
    '唱歌',
    '万圣节海龟汤',
    '花店杂谈时光',
    '童年小游戏',
    '梦境之花',
    '歌（已取消）',
    '视频鉴赏回',
    '花店晚间电台',
    '外出作客',
    '梦境之花',
    '唐逗人大作战',
    '休憩杂谈',
    '恐怖游戏',
    '梦境之花',
    '健身环',
    '⚠大家注意降温！',
    '【游戏】我免费了！！！',
    '装扮发售',
    '二创鉴赏（改为梦境之花）',
    '梦境之花（已取消）',
    '花店休憩杂谈',
    '合唱歌回',
    '唐逗人（已取消）',
    '唐逗人（睡）',
    '眠',
    '梦境之花',
    '游戏时光',
    '随心畅谈',
    '困',
    '夜之城一日游',
    '困',
    '强身健体健身环',
    '梦境之花主题杂谈',
    '底特律便乘人',
    '哈！！来辣！',
    '先聊天！再游戏！',
    '花店营业试运行中……',
    '和店长一起度过周末！',
    '第第第一次见面！请多关照！',
    '我也要开学了！！！',
    '大表哥我来啦！！！',
    '『最长的电影』我们的开始，是很长的电影~',
    '我 是 猫（确信',
  ];
  const randomIndex = Math.floor(Math.random() * contents.length);
  return contents[randomIndex];
}

function getDate(year, week, day) {
  const date = new Date(year, 0, 1); // 初始化为当年的第一天
  const dayOfWeek = date.getDay(); // 获取当年的第一天是星期几
  const daysUntilTargetDay = (week - 1) * 7 + (day - dayOfWeek); // 获取到目标日期的天数差
  date.setDate(date.getDate() + daysUntilTargetDay); // 将日期设置为目标日期
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 获取月份，需要加1，且保证两位数
  const dayOfMonth = String(date.getDate()).padStart(2, '0'); // 获取日期，保证两位数
  return `${month}/${dayOfMonth}`; // 返回日期字符串
}

function generateData(weekNum) {
  const list = [];
  for (let i = 1; i <= weekNum; i++) {
    const week = {
      date: `2023年第${i}周`,
      activities: [],
    };
    for (let j = 1; j <= 7; j++) {
      const dayOfWeek = days[j - 1];
      const activity = {
        type: getRandomCategory(),
        time: `${getDate(2023, i, j)} ${dayOfWeek} ${getRandomTime()}`,
        content: getRandomContent(),
      };
      week.activities.push(activity);
    }
    list.push(week);
  }
  return list;
}

export default function getCalendarList(weekNum = 2) {
  return generateData(weekNum);
}
