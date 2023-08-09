"use client"

import Slider from "@/components/Slider"
import MainLayout from "./layouts/MainLayout"
import Recomendations from "./layouts/includes/Recomendations"
import Sale from "./layouts/includes/Sale"
import Categories from "./layouts/includes/Categories"

export default function Home() {
  return (
    <MainLayout>
      <Slider />
      <Recomendations type="Destaques e Recomendações" />
      <Categories />
      <Sale type="Jogos em promoção" />
    </MainLayout>
  )
}
