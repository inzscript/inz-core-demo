import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              ShadCN UI + Next.js
            </h1>
            <p className="text-xl text-muted-foreground">
              Successfully integrated ShadCN UI with dark mode enabled by default
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg bg-card text-card-foreground">
              <h3 className="text-lg font-semibold mb-2">Button Variants</h3>
              <div className="space-y-2">
                <Button className="w-full">Default</Button>
                <Button variant="secondary" className="w-full">Secondary</Button>
                <Button variant="outline" className="w-full">Outline</Button>
                <Button variant="destructive" className="w-full">Destructive</Button>
                <Button variant="ghost" className="w-full">Ghost</Button>
                <Button variant="link" className="w-full">Link</Button>
              </div>
            </div>

            <div className="p-6 border rounded-lg bg-card text-card-foreground">
              <h3 className="text-lg font-semibold mb-2">Button Sizes</h3>
              <div className="space-y-2">
                <Button size="sm" className="w-full">Small</Button>
                <Button size="default" className="w-full">Default</Button>
                <Button size="lg" className="w-full">Large</Button>
              </div>
            </div>

            <div className="p-6 border rounded-lg bg-card text-card-foreground">
              <h3 className="text-lg font-semibold mb-2">Dark Mode</h3>
              <p className="text-sm text-muted-foreground mb-4">
                This page is running in dark mode by default. The ShadCN components automatically adapt to the theme.
              </p>
              <Button className="w-full">
                Dark Mode Active
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground">
              All ShadCN UI components are now ready to use with dark mode enabled by default.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
