max_threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
min_threads_count = ENV.fetch("RAILS_MIN_THREADS") { max_threads_count }
threads min_threads_count, max_threads_count

environment "production"

# pidfile ENV.fetch("PIDFILE") { "tmp/pids/server.pid" }

workers ENV.fetch("WEB_CONCURRENCY") { 1 }

app_root = File.expand_path("../../..", __FILE__)
directory app_root
bind "unix://#{app_root}/tmp/sockets/puma.sock"

# Allow puma to be restarted by `bin/rails restart` command.
plugin :tmp_restart
