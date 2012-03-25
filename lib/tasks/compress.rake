require 'uglifier'

task :uglify do
  ['jquery.role', 'role'].each do |file_name|
    base_name = File.join('lib', file_name)
    File.write(
      base_name + '.min.js',
      Uglifier.new.compile(
        File.read(base_name + '.js')
      )
    )
  end
end
