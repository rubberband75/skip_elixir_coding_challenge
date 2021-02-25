defmodule PopWeb.Controllers.TemperatureController do
  use PopWeb, :controller

  def index(conn, _) do
    conn
    |> json(%{
      temps: []
    })
  end
end
