lib.contentElement {
  # Overwrite certain templates from fluid_styled_content
  templateRootPaths.100 = EXT:sms_responsive_images/Resources/Private/Extensions/fluid_styled_content/Templates/
  partialRootPaths.100 = EXT:sms_responsive_images/Resources/Private/Extensions/fluid_styled_content/Partials/
  layoutRootPaths.100 = EXT:sms_responsive_images/Resources/Private/Extensions/fluid_styled_content/Layouts/

  # Add responsive image settings to all content elements
  settings.tx_smsresponsiveimages {
    srcset = {$tx_smsresponsiveimages.srcset}
    sizes = {$tx_smsresponsiveimages.sizes}
    breakpoints {
    }
  }
}
