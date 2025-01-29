@echo off


echo "Compiling C++ Application... "
call npm run compile-engine --prefix ./engine/
echo "DONE... "


echo "Building JavaScript bundle... "
call npm run build-engine --prefix ./engine/
echo "DONE... "


echo "Starting Laravel server... "
php ./server/artisan serve


@pause
