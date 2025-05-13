.PHONY: workshop-assets
workshop-assets:
	tar -zcvf workshop-assets.tgz config.toml content layouts LICENSE static themes assets .gitignore .gitmodules Makefile README.md
	mv workshop-assets.tgz static/workshop-assets.tgz

.PHONY: install-hugo-codespace
install-hugo-codespace:
	curl -L https://github.com/gohugoio/hugo/releases/download/v0.154.0/hugo_extended_0.145.0_linux-amd64.tar.gz | tar -zxv hugo
