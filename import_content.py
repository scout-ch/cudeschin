#!/usr/bin/env python3

import os
import json
import fnmatch

SOURCE_DIR = 'content'
LANGUAGES = ['de', 'fr', 'it']
OUTPUT = 'src/assets/articles.json'


def load():
    articles = {lang: [] for lang in LANGUAGES}
    for lang in LANGUAGES:
        files = os.listdir(os.path.join(SOURCE_DIR, lang))
        markdown_files = [f for f in files if fnmatch.fnmatch(f, '*.md')]
        markdown_files.sort()
        for article in markdown_files:
            with open(os.path.join(SOURCE_DIR, lang, article)) as f:
                content = f.read()
                title = content.splitlines()[0]
                slug = article[3:-3].lower()
                img_name = article.replace('.md', '.jpg')
                img = os.path.join('images', 'titles', img_name)

                articles[lang].append({
                    "title": title,
                    "slug": slug,
                    "img": img,
                    "content": content,
                })

    return articles


def overview(articles):
    print()
    print('IMPORTIERTE ARTIKEL')
    print('###################')
    print()
    for (lang, articles) in articles.items():
        print(f'{lang}: {len(articles)}')
    print()


def export(articles):
    with open(OUTPUT, 'w') as output:
        json.dump(articles, output, indent=4, ensure_ascii=False)


if __name__ == '__main__':
    articles = load()
    overview(articles)
    export(articles)
