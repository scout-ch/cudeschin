#!/usr/bin/env python3

import os
import json
import fnmatch

SOURCE_DIR = 'content'
LANGUAGES = ['de', 'fr', 'it']
OUTPUT = 'src/assets/articles.json'


def load():
    """ Load articales into dictionary """
    articles = {lang: [] for lang in LANGUAGES}
    for lang in LANGUAGES:
        files = os.listdir(os.path.join(SOURCE_DIR, lang))
        markdown_files = [f for f in files if fnmatch.fnmatch(f, '*.md')]
        markdown_files.sort()
        for article in markdown_files:
            with open(os.path.join(SOURCE_DIR, lang, article)) as md_file:
                content = md_file.read()
                title = content.splitlines()[0]
                article_id = article[0:2]

                articles[lang].append({
                    "id": article_id,
                    "title": title,
                    "content": content,
                })

    return articles


def overview(articles):
    """ Show number of imported articles per language """
    print()
    print('IMPORTIERTE ARTIKEL')
    print('###################')
    print()
    for (lang, articles) in articles.items():
        print(f'{lang}: {len(articles)}')
    print()


def export(articles):
    """ Update articles.json in PWA src """
    with open(OUTPUT, 'w') as output:
        json.dump(articles, output, indent=4, ensure_ascii=False)


if __name__ == '__main__':
    all_articles = load()
    overview(all_articles)
    export(all_articles)
