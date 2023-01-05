import Header from '@components/header';
import Nav from '@common/Nav';

export default function MainLayaout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Nav />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-">{children}</div>
        </main>
      </div>
    </>
  );
}
