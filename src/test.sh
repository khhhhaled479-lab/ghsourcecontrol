EXPECTED = "Hello2, World!"

OUTPUT=$(node -e "console.log(require('./src/app')('test'))")

if [ "$OUTPUT" = "$EXPECTED" ]; then
    echo "Test passed!"
else
    echo "Test failed. Expected '$EXPECTED' but got '$OUTPUT'"
    exit 1
fi