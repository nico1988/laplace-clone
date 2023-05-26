import Image from 'next/image';

export default function NavBar() {
  const fontSize = 20;
  const NavList = [
    {
      icon: '/home.svg',
      title: '首页',
      href: '/',
    },
    {
      icon: '/calendar.svg',
      title: '日程',
      href: 'calendar',
    },
    {
      icon: '/music.svg',
      title: '歌单',
      href: 'music-list',
    },
    {
      icon: '/info.svg',
      title: '关于',
      href: 'about',
    },
  ];

  return (
    <nav className="nav__wrapper z-50 mt-3">
      <ul className="relative z-10 flex justify-center gap-3">
        <a href="https://www.bilibili.com/" className="flex">
          <Image
            src="/bilibili.svg"
            width={fontSize}
            height={fontSize}
            alt="bilibili"
          />
        </a>
        <a href="https://weibo.com/" className="flex">
          <Image
            src="/weibo.svg"
            width={fontSize}
            height={fontSize}
            b
            alt="weibo"
          />
        </a>
        <span>|</span>
        {NavList.map((item) => (
          <li key={item.title} className="flex items-center">
            <a href={item.href} className="flex">
              <Image src={item.icon} width={fontSize} height={fontSize} />
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
