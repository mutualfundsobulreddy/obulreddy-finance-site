
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ObulreddyFinance() {
  const [sip, setSip] = useState({ amount: "", rate: "", time: "" });
  const [result, setResult] = useState(null);

  const calculateSIP = () => {
    const P = parseFloat(sip.amount);
    const r = parseFloat(sip.rate) / 100 / 12;
    const n = parseFloat(sip.time) * 12;
    const maturity = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    setResult(maturity.toFixed(2));
  };

  const services = [
    {
      name: "All Types of Loans",
      message: "Hi Obulreddy, I am interested in applying for a loan. Please guide me."
    },
    {
      name: "All Types of Insurance",
      message: "Hi Obulreddy, I want to know more about insurance options."
    },
    {
      name: "Credit Cards",
      message: "Hi Obulreddy, I am interested in getting a credit card."
    },
    {
      name: "Mutual Funds (SIP)",
      message: "Hi Obulreddy, I want to start investing in mutual funds via SIP."
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Obulreddy Financial Services</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {services.map((service, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <a
                href={`https://wa.me/919441835664?text=${encodeURIComponent(service.message)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-2">Contact on WhatsApp</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">SIP Calculator</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Input
            placeholder="Monthly Investment (₹)"
            value={sip.amount}
            onChange={(e) => setSip({ ...sip, amount: e.target.value })}
          />
          <Input
            placeholder="Expected Annual Return (%)"
            value={sip.rate}
            onChange={(e) => setSip({ ...sip, rate: e.target.value })}
          />
          <Input
            placeholder="Investment Duration (Years)"
            value={sip.time}
            onChange={(e) => setSip({ ...sip, time: e.target.value })}
          />
        </div>
        <Button onClick={calculateSIP}>Calculate</Button>
        {result && (
          <p className="mt-4 text-lg">Maturity Amount: ₹{result}</p>
        )}
      </section>

      <footer className="text-center text-sm text-gray-500">
        &copy; 2025 Obulreddy Financial Services. All rights reserved.
      </footer>
    </div>
  );
}
