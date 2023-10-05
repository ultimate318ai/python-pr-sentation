# python-presentation

## Installation

```sh
pip install notebook==6.5.5 # Issues with slide with newer versions.
# If an error occurs : 
    pip uninstall traitlets
    pip install traitlets==5.9.0



jupyter notebook
```

## Render 

```sh
jupyter nbconvert presentation.ipynb --to slides # for html output

jupyter nbconvert Untitled2.ipynb --to pdf # for pdf output
```
