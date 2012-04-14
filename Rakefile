# encoding: utf-8
task default: :test

desc 'Use UglifyJS to compress javascript'
task :build do
  require 'uglifier'
  %w(jquery.role role).each do |filename|
    source =   source = File.read("lib/#{filename}.js")
    compressed = Uglifier.compile(source, copyright: false)
    File.open("lib/#{filename}.min.js", 'w'){ |f| f.write(compressed) }
    rate = compressed.length.to_f/source.length
    puts "Compressed #{filename}.js: #{compressed.length}/#{source.length} #{(rate * 100).round}%"
  end
end


desc 'Run tests'
task :test do
  pid = spawn('bundle exec serve', err: '/dev/null')
  sleep 2
  version = ENV['JQ_VERSION'] || '1.7.2'
  result = system %{phantomjs ./test/phantom-test.js "http://localhost:4000/test/test.html?#{version}"}
  Process.kill 'INT', pid
  exit(result)
end