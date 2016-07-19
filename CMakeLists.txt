cmake_minimum_required(VERSION 3.1)

project(lgemu)
aux_source_directory(./src SRCDIR)
add_executable(lgemu ${SRCDIR})
target_link_libraries(lgemu uv)
