export default function HeroSection() {
    return (
      <section
        className="relative text-center py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/landingpage-bg.png')" }}
      >
        <h1 className="text-6xl font-bold">MENU</h1>
        <p className="text-gray-300 mt-4 px-10">
          Please take a look at our menu featuring food, drinks, and brunch. If you&apos;d like to place an order, use the &quot;Order Online&quot; button located below the menu.
        </p>
      </section>
    );
  }
  