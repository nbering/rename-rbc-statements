# Rename RBC Statements

Downloaded RBC bank statements come with filenames like:

12345XXX6789-2016Jan03-2016Feb04.pdf

Why is that a problem? Because the month names is used instead of the month number,
file explorers lexically sort the names in a way that does not match chronological
order. I found this annoying, but manually renaming the statements from my 5 RBC
accounts was too time consuming. This utility fixes that issue for me.

## Install

```bash

$ npm install -g @nbering/rename-rbc-statements

```

## Usage

```bash

$ cd /path/to/statements
$ rename-rbc-statements

```

## License

MIT License

Copyright (c) 2016 Nicholas Bering

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
