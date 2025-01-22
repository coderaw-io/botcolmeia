"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, FileDownIcon, Search, SlidersHorizontal } from "lucide-react"

export function CustomersFiltersSection() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
        <Input className="pl-10 h-10" placeholder="Filtrar contato" />
      </div>

      <Button variant="outline" className="h-10 flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <span>01 de Dezembro - 21 de Janeiro - 2025</span>
      </Button>

      <Button
        type="button"
        variant="outline"
        size="lg"
        className="h-10 w-28 flex items-center gap-2"
      >
        <SlidersHorizontal className="size-4" />
        <span className="text-sm">Filtros</span>
      </Button>

      <Button
        type="button"
        className="bg-success ml-auto flex items-center gap-2 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-success"
      >
        <FileDownIcon />
        Exportar como CSV
      </Button>
    </div>
  )
}

