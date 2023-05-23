import Link from 'next/link'

const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>
          <Link href='/'>
            <img className="logo-img" src="/nextjs-icon.png" width={130} height={70} alt="logo"/>
          </Link>
        </div>
        <div className="item-subheader">
        <div className="header-subtext" >NextJs 13 Application</div>
          <div className='links'>
            <Link href='/'>Blogs</Link>
            <Link href='/newblog'>New Blog</Link>
            <Link href='/comments'>Comments</Link>
          </div>
        </div>
    </header>
  )
}
export default Header