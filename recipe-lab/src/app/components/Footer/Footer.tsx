export default function Footer() {
  return (
  <>
    <footer className="py-16 bg-lightGray">
      <div className="container mx-auto flex flex-col gap-y-4">
        <div className="flex justify-center">
          <a className="rumble-title">Rumble Recipes</a>
        </div>
        <div className="flex justify-center">
          <ul className="flex gap-10">
            <li>
              <a>
                Home
              </a>
            </li>
            <li>
              <a>
                My Recipes
              </a>
            </li>
            <li>
              <a>
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
