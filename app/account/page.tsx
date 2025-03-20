"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";

export default function ProfilePage() {
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123 456 7890",
    bio: "A student.",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    twitter: "https://twitter.com/johndoe",
  });

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Card className="shadow-lg border rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-8">
          <div className="flex justify-center">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <AvatarImage src="/avatar.jpg" alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-2xl font-bold mt-3">{user.name}</CardTitle>
          <p className="text-sm opacity-80">{user.bio}</p>
        </CardHeader>

        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-500" />
              <span className="text-gray-800">{user.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-500" />
              <span className="text-gray-800">{user.phone}</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5 text-blue-700" />
                </Button>
              </a>
              <a href={user.github} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5 text-gray-900" />
                </Button>
              </a>
              <a href={user.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5 text-blue-500" />
                </Button>
              </a>
            </div>

            <Button className="w-full mt-4">Edit Profile</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
