import Image from 'next/image';
import SongList from '@/components/SongList';

export default function MusicList() {
  const listenOnXWidth = 144;
  const listenOnXHeight = 128;
  return (
    <div className="flex h-screen flex-col items-center px-4">
      {/* page title */}
      <div className="mb-4 flex flex-col items-center">
        <div className="text-[64px]">Cover Songs</div>
        <div className="text-2xl">翻唱切片/歌单图鉴</div>
      </div>

      <div className="w-[500px] rounded-lg bg-[#08120e66] py-6  px-4">
        <div className="grid gap-y-6">
          <div>
            大概是最全的歌切备份了。非实时更新，部分老歌曲来自各位切片老师的视频切片，在此表示感谢。所有音频已永久保存在
            AWS S3 上，点击右侧按钮可下载
          </div>
          <div>
            纯手写播放器，0 依赖库，支持 MediaMetadata 控制。超高性能连续播放
            200 小时不卡顿，但可能存在未知 bug 😋
          </div>
          <ul className="list-disc px-4">
            <li>遗漏、纠错：s@laplace.live</li>
            <li>RSS 订阅：/covers.xml</li>
            <li>
              Apple Podcasts 曲目完整，但需要海外 Apple
              ID；网易云音乐无需海外账户，但有版权炮（尤其是周杰伦）导致曲目不完整，所以来这里听也不错
              🤗
            </li>
            <li>
              中国大陆串流卡顿时请勾选「中国节点」，但阿里云会扫存储桶内容，可能会出现文件缺失（另类版权炮）的问题
            </li>
          </ul>
          <div className="flex flex-col items-center">
            <Image
              src="/music-cover.jpeg"
              width={200}
              height={200}
              alt="music cover"
            />
            <div className="mt-3 flex gap-x-1">
              <Image
                src="/listen-apple.svg"
                width={listenOnXWidth}
                height={listenOnXHeight}
                alt="listen on apple podcast"
              />
              <Image
                src="/listen-spotify.svg"
                width={listenOnXWidth}
                height={listenOnXHeight}
                alt="listen on apple podcast"
              />
              <Image
                src="/listen-netease.svg"
                width={listenOnXWidth}
                height={listenOnXHeight}
                alt="listen on apple podcast"
              />
            </div>
          </div>
          <SongList />
        </div>
      </div>
    </div>
  );
}
