from prometheus_client import Gauge

start_time = Gauge(
    "start_time", "The time when the app was started"
)

cats = Gauge(
    "cats", "Total cats added"
)
