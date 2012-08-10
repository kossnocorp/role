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

JQUERY_VERSIONS = %w(1.2.6 1.3.2 1.4.2 1.5.2 1.6.1 1.7.1 1.7.2 1.8.0)

desc 'Run tests'
task :test do
  results = JQUERY_VERSIONS.map do |version|
    system %{phantomjs ./test/phantom-test.js "test/test.html##{version}"}
  end
  exit(results.all?? 0 : 1)
end