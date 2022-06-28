resource "google_compute_network" "default" {
    name = "${terraform {
      required_version = ">= 0.12"
        }
    }"
    auto_create_subnet = false
}