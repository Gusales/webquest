import { SubjectArticle } from "@/src/components/subject-article/subject-article";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-indigo-900 font-thin mb-4 text-5xl">WebQuest</h1>
          <p className="font-normal text-xl text-gray-700 max-w-2xl mx-auto">Material de apoio para as disciplinas de matemática do curso de Análise e Desenvolvimento de Sistemas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          <SubjectArticle
            cover={{
              url: "https://images.unsplash.com/photo-1762326866764-1ef1a008e0ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxjdWx1cyUyMG1hdGhlbWF0aWNzfGVufDF8fHx8MTc2NTAyNzExOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            }}
            redirectTo="/calculo"
            title="Cálculo"
          />
          <SubjectArticle
            cover={{
              url: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aXN0aWNzJTIwZGF0YXxlbnwxfHx8fDE3NjQ5MTYzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            }}
            redirectTo="/estatistica-aplicada"
            title="Estatística Aplicada"
          />
          <SubjectArticle
            cover={{
              url: "https://images.unsplash.com/photo-1754304342321-2b4b9ed3fd2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lYXIlMjBwcm9ncmFtbWluZyUyMG9wdGltaXphdGlvbnxlbnwxfHx8fDE3NjUwMjcxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            }}
            redirectTo="/programacao-linear"
            title="Programação Linear"
          />
        </div>
      </main>
    </div>
  );
}
