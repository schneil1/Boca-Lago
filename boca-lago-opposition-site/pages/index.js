import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function OppositionWebsite() {
  const files = [
    { name: "Justification Statement", url: "/downloads/Justification Statement_610304.docx" },
    { name: "Traffic Impact Study", url: "/downloads/Traffic Study_610310.pdf" }
    // Add other files as needed
  ];

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/grass-background.jpg')" }}
    >
      <div className="bg-white/90 p-6 rounded-lg shadow-lg max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center text-green-800">Stop the Boca Lago Overdevelopment</h1>
        <p className="text-center text-lg">
          Lennar Homes wants to add 762 new units on former golf course land—putting pressure on traffic, schools,
          and green space. Join your neighbors and help us protect Boca Lago!
        </p>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Download Documents</h2>
            <ul className="space-y-2">
              {files.map((file) => (
                <li key={file.name} className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <a href={file.url} download className="text-blue-600 hover:underline">
                    {file.name}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
