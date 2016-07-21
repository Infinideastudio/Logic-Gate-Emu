cmake_minimum_required(VERSION 2.8)

project(lgemu)
aux_source_directory(./src SRCDIR)
add_executable(lgemu ${SRCDIR})
target_link_libraries(lgemu uv json11)
