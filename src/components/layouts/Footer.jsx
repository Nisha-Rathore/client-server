import React from 'react'
import {
  Dumbbell,
  Users,
  Activity,
  CreditCard,
} from "lucide-react";


const Footer = () => {
  return (
    <div>
         <footer className="mx-auto max-w-7xl px-4 py-6 text-xs text-zinc-500">
        © {new Date().getFullYear()} IronPulse. All rights reserved.
      </footer>
    </div>
  )
}

export default Footer