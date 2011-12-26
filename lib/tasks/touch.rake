task :touch do
  puts `find . -name "*.coffee" -exec touch {} \+`
end
