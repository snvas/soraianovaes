import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
	  <title>Soraia Novaes</title>
        <meta name="description" content="Professora Certificada pelo Google" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
	  <h1 className={styles.title}>
		Soraia Novaes</h1>
		<h2 className={styles.titleh2}>
		<a href="https://edudirectory.withgoogle.com/profiles/5657904568860672">Google Innovator e Trainer</a>
        </h2>

        <p className={styles.description}>
          Consultora em Tecnologias Educacionais e{' '}
          <code className={styles.code}><a href="https://github.com/snvas">aprendiz de programação</a></code>
        </p>

        <div className={styles.grid}>
		<a href="https://empreendelab.com.br" className={styles.card}>
            <h2>Consultoria &rarr;</h2>
            <p>Tecnologias educacionais para escolas e Transformação Digital para pequenas empresas.</p>
          </a>

          <a href="https://cursos.empreendelab.com.br/cursos-udemy/" className={styles.card}>
            <h2>Cursos &rarr;</h2>
            <p>Cursos online para professores, profissionais de comunicação, marketing e design.</p>
          </a>
		  <a href="https://desafiodocodigo.com.br" className={styles.card}>
            <h2>Desafio do Código &rarr;</h2>
            <p>Desafio online com um conjunto de missões que guiam você por ferramentas digitais para aprender programação, matemática e inglês.</p>
          </a>
		  <a href="https://meugurudigital.com.br" className={styles.card}>
            <h2>Guru Digital &rarr;</h2>
            <p>Serviço via WhatsApp que ajuda a galera que precisa de uma mãozinha no mundo digital para sua carreira ou negócio.</p>
          </a>

		 
        </div>
      </main>

      <footer className={styles.footer}>
	  <a
          href="https://br.linkedin.com/in/soraianovaes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by SnVas{' '}
        </a>
      </footer>
    </div>
  )
}
