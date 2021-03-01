defmodule PopWeb.Controllers.TemperatureController do
  use PopWeb, :controller

  def index(conn, _) do
    conn
    |> json(%{
      temps: [-459.67,32,212] ++ Enum.map(0..10, fn x -> x * 10 end)
    })
  end
end
