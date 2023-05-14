import Image from 'next/image';

export default function NavBar() {
  const fontSize = 20;
  const NavList = [
    {
      icon: '/home.svg',
      title: '首页',
      href: '',
    },
    {
      icon: '/calendar.svg',
      title: '日程',
      href: 'calender',
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
    <nav className="nav__wrapper mt-3">
      <ul className="relative z-10 flex justify-center gap-2">
        {NavList.map((item) => (
          <li key={item.title} className="flex items-center">
            <Image src={item.icon} width={fontSize} height={fontSize} />
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
