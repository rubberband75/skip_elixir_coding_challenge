defmodule PopWeb.Controllers.TemperatureControllerTest do
  use PopWeb.ConnCase, async: true

  describe "index" do
    test "returns stuff", %{conn: conn} do
      resp =
        conn
        |> get("/api/temperature")
        |> json_response(200)

      assert resp == %{"temps" => []}
    end
  end
end
