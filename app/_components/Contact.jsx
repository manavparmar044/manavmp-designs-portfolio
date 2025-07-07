"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
  
      if (res.ok) {
        alert("Message sent successfully!")
        setFormData({
          name: "",
          email: "",
          projectType: "",
          message: "",
        })
      } else {
        alert("Failed to send message.")
      }
    } catch (err) {
      console.error(err)
      alert("Something went wrong.")
    }
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Contact</h2>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
            Let&apos;s Build Something Iconic
          </h3>
          <p className="text-lg text-slate-600">
            Have a brand idea or redesign in mind? Let&apos;s chat and make it real.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="h-12"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="h-12"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
              Project Type
            </label>
            <Select onValueChange={(value) => handleChange("projectType", value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brand-identity">Brand Identity Design</SelectItem>
                <SelectItem value="logo-design">Logo Design</SelectItem>
                <SelectItem value="rebranding">Rebranding</SelectItem>
                <SelectItem value="consultation">Design Consultation</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Tell me about your project, goals, and timeline..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="min-h-[120px] resize-none"
              required
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-600">© 2025 Manav Manish Parmar. Crafting brands that matter.</p>
        </div>
      </div>
    </section>
  )
}
