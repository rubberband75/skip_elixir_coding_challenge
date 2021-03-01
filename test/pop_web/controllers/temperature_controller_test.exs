defmodule PopWeb.Controllers.TemperatureControllerTest do
  use PopWeb.ConnCase, async: true

  describe "index" do
    test "returns stuff", %{conn: conn} do
      resp =
        conn
        |> get("/api/temperature")
        |> json_response(200)

      assert resp == %{"temps" => [-459.67, 32, 212, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
    end

    test "temps array not empty", %{conn: conn} do
      resp =
        conn
        |> get("/api/temperature")
        |> json_response(200)

      assert (length resp["temps"]) >  0
    end

    test "all temps are numbers", %{conn: conn} do
      resp =
        conn
        |> get("/api/temperature")
        |> json_response(200)

      assert Enum.all?(resp["temps"], fn x -> is_number(x) end)
    end
  end
end
