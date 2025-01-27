export default function Footer() {
  return (
  <>
    <footer className="py-16 bg-lightGray border-t-2">
      <div className="container mx-auto flex flex-col gap-y-4">
        <div className="flex justify-center">
          <a className="rumble-title">Rumble Recipes</a>
        </div>
        <div className="flex justify-center">
          <ul className="flex gap-10">
            <li>
              <a className="nav-title">
                Home
              </a>
            </li>
            <li>
              <a className="nav-title">
                My Recipes
              </a>
            </li>
            <li>
              <a className="nav-title">
                Tips
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex justify-center pt-10 px-2 md:px-0 text-center">
        <span>Created by Devan Rivera | Performance by Next.js and React</span>
      </div>
    </footer>
  </>
    )
}
