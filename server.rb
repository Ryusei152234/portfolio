require 'webrick'

root = File.expand_path('.')
server = WEBrick::HTTPServer.new(
  Port: 8000,
  DocumentRoot: root
)

trap('INT') { server.shutdown }

puts "Server running at http://localhost:8000"
server.start