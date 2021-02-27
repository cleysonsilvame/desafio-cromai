import { useRouter } from 'next/router';
import Link from 'next/link';
import { Nav, Navbar } from 'react-bootstrap';

export default function NavBar() {
  const router = useRouter();

  return (
    <Navbar>
      <Nav className="w-100 d-flex justify-content-around">
        <Link href="/">
          <Nav.Link as="a" href="/" className={router.pathname === '/' ? 'active' : ''}>
            Home
          </Nav.Link>
        </Link>

        <Link href="/teoria">
          <Nav.Link
            as="a"
            href="/teoria"
            className={router.pathname === '/teoria' ? 'active' : ''}
          >
            Teoria
          </Nav.Link>
        </Link>

        <Link href="/desafio">
          <Nav.Link
            as="a"
            href="/desafio"
            className={router.pathname === '/desafio' ? 'active' : ''}
          >
            Desafio
          </Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
}
