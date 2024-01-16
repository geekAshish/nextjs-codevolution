import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Ashish Kushwaha</h1>
      <Link href={"/products"}>Product</Link>
      <Link href={"/blogs"}>Blogs</Link>
    </>
  );
}

export default Home;
