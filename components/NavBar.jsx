'use client';

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
    {
      icon: '/more.svg',
      title: '更多',
      href: '',
    },
  ];
  const handleDropdownClick = () => {
    const menu = document.querySelector('.dropdown');
    const visible = menu.style.display || 'none';

    menu.style.display = visible !== 'none' ? 'none' : 'block';
  };

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
            bb
            alt="weibo"
          />
        </a>
        <span>|</span>
        {NavList.map((item) => (
          <li key={item.title} className="flex items-center">
            {item.href ? (
              <a href={item.href} className="flex">
                <Image src={item.icon} width={fontSize} height={fontSize} />
                {item.title}
              </a>
            ) : (
              <div className="relative">
                <button
                  key={item.title}
                  className="flex cursor-pointer"
                  onClick={handleDropdownClick}
                >
                  <Image src={item.icon} width={fontSize} height={fontSize} />
                  <span>{item.title}</span>
                </button>
                <div className="dropdown absolute flex hidden w-36 rounded-md bg-[#20231d] px-1 py-2">
                  <a
                    className="flex w-full gap-x-1 rounded px-1 py-1 hover:bg-[#3e4139]"
                    href="https://clock.laplace.live/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/clock.svg"
                      width={fontSize}
                      height={fontSize}
                    />
                    OBS时钟
                  </a>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
