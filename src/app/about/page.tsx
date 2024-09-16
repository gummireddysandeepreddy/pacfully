import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Printer, Package, Cpu, Globe } from "lucide-react"

export default function Component() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">ABOUT US</h2>
          <p className="text-muted-foreground">
            Pacfully is a fully forward-integrated and comprehensive solutions provider
            company. Based in Chennai, we serve PAN India. We Engineer, Build and
            maintain commercial and utility-scale projects that deliver a powerful return on
            investment for our clients.
          </p>
          <div className="space-y-4">
            {[
              {
                title: "ROBUST PRINTING",
                icon: Printer,
                description: "Robust Printing and Finishing Infrastructure with ample capacity for mass production.",
              },
              {
                title: "PACKAGING",
                icon: Package,
                description: "Capability to produce all kinds of labels and packaging items catering to Apparel, FMCG, Electronics, Automotive, Pharma and Education industry.",
              },
              {
                title: "INDUSTRY STANDARD",
                icon: Cpu,
                description: "Industry Standards Workflows & Automation Softwares in the entire production process.",
              },
              {
                title: "GLOBAL SERVICE",
                icon: Globe,
                description: "We are providing Pan India service. Global services with the help of our Global partners.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <item.icon className="h-8 w-8" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <img
            alt="Digital interface"
            className="rounded-lg object-cover w-full h-full"
            height="600"
            src="/placeholder.svg?height=600&width=600"
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
            width="600"
          />
        </div>
      </div>
    </div>
  )
}