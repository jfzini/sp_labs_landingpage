import '../../../styles/Video.sass';

export default function VideoSection() {
  return (
    <section className="page-padding section--container al-item-center light-gray-bg">
      <article className="article--container w100--medium-screen">
        <h2 className="section--title extra-bold">Quem são, o que fazem, onde vivem?</h2>
        <p className="paragraph soft-black">
          Como não precisava embedar o vídeo do Rick Astley Remastered 4K 60FPS, coloquei aqui uma
          cena icônica do meu filme nacional favorito. Pode dar play!
        </p>
      </article>
      <iframe
        height="315"
        src="https://www.youtube.com/embed/e3FXt-wABIE?si=W6ejlF3b3UX6KKKk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        className="video--container"
      ></iframe>
    </section>
  );
}
